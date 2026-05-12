let tickets = {
  "GELASHVILI_AAAAAA": {
    name:   "GIORGI GELASHVILI",
    flight: "TB-101",
    route:  "TBS - FMO",
    date:   "14 JUNE",
    seat:   "12A"
  },
  "CHITASHVILI_AAAAAA": {
    name:   "LEVAN CHITASHVILI",
    flight: "TB-341",
    route:  "TBS - IST",
    date:   "14 APRIL",
    seat:   "22A"
  },
  "IASHVILI_AAAAAA": {
    name:   "LIZI IASHVILI",
    flight: "TB-302",
    route:  "KUT - IST",
    date:   "14 DECEMBER",
    seat:   "10A"
  },
  "ARVELADZE_AAAAAA": {
    name:   "LERI ARVELADZE",
    flight: "TB-301",
    route:  "TBS - IST",
    date:   "14 SEPTEMBER",
    seat:   "2A"
  },
  "BERIDZE_AAAAAA": {
    name:   "NINO BERIDZE",
    flight: "A9-210",
    route:  "MXP - FRA",
    date:   "2 JULY",
    seat:   "24C"
  }
};



function popup() {
  let surname = prompt("შეიყვანეთ გვარი");
  let pnr     = prompt("შეიყვანეთ PNR კოდი:");
  let full = surname + "_" + pnr;

  if (tickets [full]) {
    let ticket = tickets[full];
    alert(
      "სახელი: " + ticket.name + 
      "რეისი: " + ticket.flight +
      "მიმართულება: " + ticket.route +
      "თარიღი: " + ticket.date +
      "სავარძელი: " + ticket.seat
    );
  } else {
    alert("ბილეთი ვერ მოიძებნა");
  }
}  