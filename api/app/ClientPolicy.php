<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class ClientPolicy extends Model
{
    //Model for policies table
    protected $table = 'client_policies';
    protected $fillable = [
        'clientName', 'customerName','customerAddress','premium','policyType', 'insurerName'
    ];

}
