<!DOCTYPE html>
<html>
    <body>
        <div style="margin-top: ;display:inline-block;padding: 15px;border: solid 1px black; width: 300px;">
            <p>name: {{ $order['user']->UserInfo->name }}</p>
            <p>lastname: {{ $order['user']->UserInfo->lastname }}</p>
            <p>phone: {{ $order['user']->UserInfo->phone }}</p>
            <p>adress: {{ $order['user']->UserInfo->code_postal.' '.$order['user']->UserInfo->ville }}</p>
            <p>{{ $order['user']->UserInfo->voie }}</p>
            <p>{{ $order['user']->UserInfo->pays }}</p>
        </div>
        <div style="margin-left:200px; display:inline-block;">
            <img src={{asset('images/inline-logo.png')}}>
        </div>
        <div>
            {{print_r($order['cart'])}}
            @foreach($order['cart'] as $product)
            {{$product['id']}}
            @endforeach
        </div>
    </body>
</html>