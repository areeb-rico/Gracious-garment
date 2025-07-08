$(document).ready(function() {
    $('#openModal').click(function() {
        $('#checkoutModal').modal('show');
        $('.modal-right').css('display', 'block'); // Show the modal
    });

    $('#closeModal, #closeModalFooter').click(function() {
        $('#checkoutModal').modal('hide');
        $('.modal-right').css('display', 'none'); // Hide the modal
    });
});