<div>
    <div x-data="textarea" x-init="content = '{{ $content }}', checkContent('{{ $content }}')" class="flex items-center justify-center h-full min-h-screen">
        <div>
            <div>
                <highlightable-input x-ref="highlightable" id="highlightable" contenteditable="true" data-theme="light" role="textbox" aria-multiline="true" class="focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 block w-full max-w-lg min-w-[512px] px-4 py-3 bg-white border-gray-300 rounded-md shadow-sm text-base">{!! $content !!}</highlightable-input>
            </div>

            <div class="flex justify-end pt-4">
                <button @click="sendToBackend" class="hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 px-4 py-2 text-sm font-medium text-center text-white transition-all bg-blue-500 border border-blue-500 rounded-lg shadow-sm">Send to backend</button>
            </div>
        </div>
    </div>
</div>
