<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Employee extends Model
{
    protected $table = 'employees';
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'first_name',
        'surname',
        'last_name',
        'email',
        'pin',
        'personal_phone',
        'work_phone',
        'start',
        'end',
        'department',
        'position',
        'supervisors',
        'location',
        'status'
    ];

    /**
     * Auto cast data from and to json
     * @var string[]
     */
    protected $casts = [
        'supervisors' => 'array',
    ];


}
