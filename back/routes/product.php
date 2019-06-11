<?php

use Illuminate\Http\Request;
use App\Products;
use App\Http\Ressources\ProductCollection;
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
    return ['oui' => 'oui'];
});
// Route::create('/product/{id}/')
