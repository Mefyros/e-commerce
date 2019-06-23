<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Transporter;

class TransporterController extends Controller
{
    //
    public function create(Request $request){
        return Transporter::create([
            'name' => $request->name,
            'base_cost' => json_encode($request->base_cost),
            'extra' => json_encode($request->extra),
            'disponibility' => json_encode($request->disponibility),
            'delivery_delay' => json_encode($request->delivery_delay),
            'per_product' => $request->per_product
        ]);
    }
}
