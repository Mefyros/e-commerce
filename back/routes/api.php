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

        $temp = $product;
        $temp['parent'] = $product->subCategorie;
        $temp['parent']['parent'] = $product->subCategorie->categorie;
        $temp['parent']['parent']['parent'] = $product->subCategorie->categorie->classe;
        unset($temp['subCategorie']['categorie']['classe']);
        unset($temp['subCategorie']['categorie']);
        unset($temp['subCategorie']);
        $temp->specs = json_decode($temp->specs);
        return ['data' => $temp];
    } else {
        return ['error' => 'not found'];
    }
});
Route::post('/product', 'Products\ProductsController@productCreate');
Route::post('/product/{id}/quantity', 'Products\ProductsController@setQuantity');
Route::get('/products/popular', 'Products\ProductsController@mostViewedProduct');
Route::delete('/product/{id}', 'Products\ProductsController@delete');
Route::put('/product/{id}', 'Products\ProductsController@update');
Route::get('/product/{id}/visit', 'Products\ProductsController@visit');

Route::get('/classes', 'ClasseController@index');
Route::post('/classe', 'ClasseController@create');
Route::delete('/classe/{id}', 'ClasseController@delete');
Route::get('/classe/{id}', 'ClasseController@getCategorie');

Route::post('/categorie', 'CategorieController@create');
Route::get('/categories', 'CategorieController@index');
Route::delete('/categorie/{id}', 'CategorieController@delete');
Route::get('/categorie/{id}', 'CategorieController@getCategorie');
Route::put('/categorie/{id}', 'CategorieController@updateCategorie');

Route::post('/subcategorie', 'SubCategorieController@create');
Route::get('/subcategories', 'SubCategorieController@index');
Route::delete('/subcategorie/{id}', 'SubCategorieController@delete');
Route::get('/subcategorie/{id}', 'SubCategorieController@getProducts');
Route::get('/subcategorie/{id}/specs', 'SubCategorieController@getSpecs');

Route::post('/specs', 'SpecController@create');
Route::get('/specs', 'SpecController@getAll');
Route::post('/link/{categorie}/{spec}', 'CategorieSpecController@link');

Route::get('/search/categorie/{categorie}/{keyword}', 'SearchController@byCategorie');
Route::get('/search/{keyword}', 'SearchController@byKeyword');
Route::get('/search/descript/{keyword}', 'SearchController@inDescript');
Route::post('/search/specs', 'SearchController@filter');

Route::post('/transporter', 'TransporterController@create');
Route::get('/transporter', 'TransporterController@getAll');
Route::delete('/transporter/{id}', 'TransporterController@delete');
Route::put('/transporter/{id}', 'TransporterController@update');
Route::get('/transporter/{id}', 'TransporterController@readOne');

Route::post('/deliveryOption', 'CheckoutController@getDelivery');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');

Route::group(['middleware' => 'auth:api'], function(){
    Route::post('details', 'UserController@details');
    // Route::get('/user/cart', 'UserCartController@getCart');
    // Route::post('/user/cart', 'UserCartController@addProduct');
    Route::get('/user/isadmin', 'UserController@isAdmin');
    Route::put('/user/info', 'UserInfoController@update');
    Route::get('/user/info', 'UserInfoController@get');
    Route::post('/user/info', 'UserInfoController@create');
});
