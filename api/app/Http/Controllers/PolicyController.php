<?php


namespace App\Http\Controllers;


use App\ClientPolicy;

class PolicyController extends Controller
{
    function getPolicies() {
        return ClientPolicy::all();
    }
}
