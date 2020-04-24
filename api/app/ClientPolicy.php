<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class ClientPolicy extends Model
{

    protected $table = 'client_policies';
    protected $fillable = [
        'clientName', 'customerName','customerAdress','premium','policyType', 'insurerName'
    ];

}
