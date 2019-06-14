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
    return Product::all();
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

Route::get('/classes', 'ClasseController@index');
Route::post('/classe', 'ClasseController@create');
Route::delete('/classe/{id}', 'ClasseController@delete');
Route::get('/classe/{id}', 'ClasseController@getCategorie');

Route::post('/categorie', 'CategorieController@create');
Route::get('/categories', 'CategorieController@index');
Route::delete('/categorie/{id}', 'CategorieController@delete');
Route::get('/categorie/{id}', 'CategorieController@getCategorie');

Route::post('/subcategorie', 'SubCategorieController@create');
Route::get('/subcategories', 'SubCategorieController@index');
Route::delete('/subcategorie/{id}', 'SubCategorieController@delete');
Route::get('/subcategorie/{id}', 'SubCategorieController@getProducts');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');

Route::group(['middleware' => 'auth:api'], function(){
Route::post('details', 'API\UserController@details');

});
