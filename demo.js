//change an atrbute in html using js?
document.getElementById('content1').dataset.originalTitle = 'Online';

<li class="source" data-toggle="tooltip" data-placement="top" id="content1" title="" data-original-title="Test">Test Server 1</li>

document.getElementById('content1').setAttribute('data-original-title', 'Online');<li class="source" data-toggle="tooltip" data-placement="top" id="content1" title="" data-original-title="Test">Test Server 1</li>



//array using