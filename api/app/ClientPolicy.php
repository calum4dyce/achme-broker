<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class ClientPolicy extends Model
{

    protected $table = 'client_policies';
    protected $fillable = [
        'client-name', 'customer-name','customer-address','premium','policy-type', 'insurer-name'
    ];

}
