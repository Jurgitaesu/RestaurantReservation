var form = document.querySelector("form");
var maximumGuests = document.getElementById("maximumGuests");
var availableReservations = document.getElementById("availableReservations");

var restaurant = {
    name: "Tasty",
    maximumGuests: 30,
    reserved: 0,
    availableReservations: 30,

    reserve: function (guests) {
        if ((this.maximumGuests - this.reserved) >= guests) {
            swal("You made a reservation for " + guests + " guest /-s");
            this.reserved += guests;
            this.availableReservations = this.availableReservations - guests;
            availableReservations.textContent = this.availableReservations;
        } else {
            swal("Please pick a lower number of guests.");
        }
    },

    cancel: function (guests) {
        if (this.reserved >= guests) {
            this.reserved -= guests;
            this.availableReservations = this.availableReservations + guests;
            availableReservations.textContent = this.availableReservations;
            swal("You canceled a reservation for " + guests + " guest /-s");
        } else {
            swal("Please pick a lower number of guests.");
        }
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var guests = Number(form["input"].value);
    var select = document.getElementById("select");
    if (select.value == "reserve" && guests > 0) {
        restaurant.reserve(guests);
    } else if (select.value == "cancel" && guests > 0) {
        restaurant.cancel(guests);
    }
    select.value = "";
    input.value = "";

})

maximumGuests.textContent = restaurant.maximumGuests;

availableReservations.textContent = restaurant.availableReservations;
