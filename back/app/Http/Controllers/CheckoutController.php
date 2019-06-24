<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transporter;
use App\Product;

class CheckoutController extends Controller
{
    //
    public function getDelivery(Request $request){
        $transporters = $this->parseTransporter(Transporter::all());
        $products = $this->parseCart($request->cart);
        $credentials = $request->credential;
        $cost = $this->getFinalCost($credentials, $products, $transporters);
        // return $products;
        return $cost;
    }
    public function parseCart($cart){
        $products = [];
        $total = 0;
        $total_weight = 0;
        foreach($cart as $product){
            $count = count($products) + 1;
            if($product['quantity'] <= 25){
                $quantity = intval($product['quantity']);
                $count++;
                $temp = Product::find($product['id']);
                $products[] = [
                    'id' => $temp->id,
                    'price' => $temp->price,
                    'weight' => $temp->weight,
                    'total_weight' => $temp->weight * $quantity,
                    'quantity' => $product['quantity']
                ];
                $total += $temp->price * $quantity;
                $total_weight += $temp->weight * $quantity;
            } else {
                return ['err' => 'veuillez selectioner un maximum de 25 unité par produit'];
            }
        }
        $products['total'] = $total;
        $products['total_weight'] = $total_weight;
        return $products;
    }
    public function parseTransporter($transporters){
        $temp = [];
        foreach($transporters as $transporter){
            $temp[] = [
                'id' => $transporter->id,
                'name' => $transporter->name,
                'base_cost' => json_decode($transporter->base_cost),
                'extra' => json_decode($transporter->extra),
                'disponibility' => json_decode($transporter->disponibility),
                'per_product' => $transporter->per_product,
                'delivery_delay' => $transporter->delivery_delay
            ];
        }
        return $temp;
    }
    public function getFinalCost($credentials, $products, $transporters){
        $temp = [];
        foreach($transporters as $key => $transporter){
            $base_cost = $this->getBaseCost($products, $transporter);
            if(!empty($base_cost)){
                $extra = $this->getExtra($credentials, $transporter, $base_cost);
                $temp[] = $this->addPerProduct($products, $transporter, $extra);
            }
        }
        return $temp;
    }
    public function getBaseCost($products, $transporter){
        $temp = [];
        foreach($transporter['base_cost'] as $weight => $price ){
            if($products['total_weight'] <= $weight){
                if(!(($weight - $products['total_weight']) > 15000)){
                    return $temp = [
                        'id' => $transporter['id'],
                        'name' => $transporter['name'],
                        'delivery_delay' => $transporter['delivery_delay'],
                        'price' => $price
                    ];
                };
            }
        }
    }
    public function getExtra($credentials, $transporter, $base_cost){
        $temp = $base_cost;
        foreach($transporter['extra'] as $name => $value){
            if($credentials['departement'] === $name){
                if(isset($temp['price'])){
                    $price = $temp['price'];
                    $temp['price'] = ($price * floatval($value));
                }
            }
        }
        return $temp;
    }
    public function addPerProduct($products, $transporter, $cost){
        $temp = $cost;
            foreach($products as $product){
                $price = ($transporter['per_product'] * $product['quantity']);
                if(isset($temp['price'])){
                    $temp['price'] += $price;
                    $temp['price'] = round($temp['price'], 2);
                }
            }
        return $temp;
    }
    public function parseForFront($arr){
        $temp = [];
        foreach($arr as $key => $value){
            if($key !== 'total_weight'){
                $transporter = $value;
                $transporter['name'] = $key;
                $transporter['disponibility'] = 'disponible';
                if(empty($value)){
                    $transporter['disponibility'] = 'indisponible';
                }
                $temp[] = $transporter;
            }
        }
        return $temp;
    }
}
