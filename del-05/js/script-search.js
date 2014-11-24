function clearBorder() {
    if (this.value.length > 0)
        this.style.borderColor = '';
    else
        this.style.borderColor = '#c00';
}

var kw = document.searchform.keyword;
kw.addEventListener('input', clearBorder);

////////////////////////////////////////////////////////
var max_limit = 10;

function countChars() {
    var c = document.getElementById('keyword-counter');
    c.innerHTML = (max_limit - this.value.length) + '/' + max_limit;
    
}

kw.addEventListener('input', countChars);

////////////////////////////////////////////////////////

function stopTyping(e) {
    var allowed_codes = [8,9,37,39,13];

    if (this.value.length >= max_limit && allowed_codes.indexOf(e.which) === -1) 
        e.preventDefault();
}

kw.addEventListener('keydown', stopTyping);

////////////////////////////////////////////////////////

function validateSearch() {
    var form = document.searchform;
    var error_count = 0;

    if (form.keyword.value.length == 0)  {
        keyword.style.borderColor = '#c00';
        error_count++;
    }

    return (error_count == 0);
/*
    if (error_count == 0)
        return true;
    else 
        return false;
*/
}

function validateAndSubmitSearch() {
    var form = document.searchform;
    var keyword = form.keyword;
    var value = keyword.value;
    var length = value.length;

    if (length > 0) {
        form.submit();
    } else {
        keyword.style.borderColor = '#c00';
        // style="border-color: #c00"
        alert('Du måste fylla i ett nyckelord.');
    }
}
/*
Som oneliner:
if (document.searchform.keyword.value.length > 0) {
    document.searchform.submit();    
}
*/
