<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Textarea extends Component
{
    public $regex = '/{{(.*?)}}/g';

    public $content = 'This is <span class="px-1 bg-blue-100 rounded">{{some_tag}}</span> and {{another_Tag}} with double curly braces.';

    protected $listeners = ['getTags'];

    public function getTags($tags)
    {
        dd($tags);
    }

    public function render()
    {
        return view('livewire.textarea');
    }
}
