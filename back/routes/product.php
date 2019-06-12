<?php

use Illuminate\Http\Request;
use App\Product;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Http\Controllers\Products\ProductsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// si besoin d'etre log pour avoir acces
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/products', function (){
    return new ProductCollection(Product::all());
});
Route::get('/product/{id}', function ($id){
    $product = Product::find($id);
    if($product){
        return ['data' => $product];
    } else {
        return ['error' => 'not found'];
    }
});
Route::post('/product', 'Products\ProductsController@productCreate');
Route::delete('/product/{id}', 'Products\ProductsController@delete');
Route::put('/product/{id}', 'Products\ProductsController@update');
