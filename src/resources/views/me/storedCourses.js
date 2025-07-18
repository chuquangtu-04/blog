var coursesID;
var submitCheckBox = $('.submit-checkbox');
var delete_modal = document.getElementById('delete-courses-modal');
var submit_from_delete = document.getElementById('from_delete');
var btn_delete = document.getElementById('delete');
var checkboxAll = $('#checkbox-all');
var courseItemCheckbox = $('input[name="courseIds[]"]');

btn_delete.onclick = function () {
    submit_from_delete.action = '/courses/' + coursesID + '?_method=DELETE';
    submit_from_delete.submit();
};
delete_modal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    coursesID = button.getAttribute('data-id');
});
checkboxAll.change(function () {
    var isCheckedAll = $(this).prop('checked');
    courseItemCheckbox.prop('checked', isCheckedAll);
    renderCheckAllSubmitBtn();
});
courseItemCheckbox.change(function () {
    var isCheckedAll =
        courseItemCheckbox.length ===
        $('input[name="courseIds[]"]:checked').length;
    checkboxAll.prop('checked', isCheckedAll);
    renderCheckAllSubmitBtn();
});
function renderCheckAllSubmitBtn() {
    var checkedCount = $('input[name="courseIds[]"]:checked').length;
    if (checkedCount) {
        submitCheckBox.attr('disabled', false);
    } else {
        submitCheckBox.attr('disabled', true);
    }
}
