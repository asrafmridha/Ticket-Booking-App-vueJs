var app = Vue.createApp({
  data() {
    return {
      appliedCoupon: null,
      couponCode: "",
      coupons: [
        {
          code: "100TAKAOFF",
          discount: 100,
        },
        {
          code: "200TAKAOFF",
          discount: 200,
        },
      ],
      seatStates: {
        solid: {
          text: "Solid",
          color: "#ff0000",
        },
        available: {
          text: "available",
          color: "#fff",
        },
        booked: {
          text: "Booked",
          color: "gray",
        },
        selected: {
          text: "Selected",
          color: "#00ff00",
        },
      },
      seats: [
        {
          name: "A1",
          type: "available",
          price: 500,
        },
        {
          name: "A2",
          type: "available",
          price: 500,
        },
        {
          name: "A3",
          type: "available",
          price: 500,
        },
        {
          name: "A4",
          type: "available",
          price: 500,
        },
        {
          name: "B1",
          type: "available",
          price: 450,
        },
        {
          name: "B2",
          type: "available",
          price: 450,
        },
        {
          name: "B3",
          type: "available",
          price: 450,
        },
        {
          name: "B4",
          type: "available",
          price: 450,
        },
        {
          name: "C1",
          type: "sold",
          price: 500,
        },
        {
          name: "C2",
          type: "sold",
          price: 500,
        },
        {
          name: "C3",
          type: "sold",
          price: 500,
        },
        {
          name: "C4",
          type: "sold",
          price: 500,
        },
        {
          name: "D1",
          type: "available",
          price: 400,
        },
        {
          name: "D2",
          type: "available",
          price: 400,
        },
        {
          name: "D3",
          type: "available",
          price: 400,
        },
        {
          name: "D4",
          type: "available",
          price: 400,
        },
        {
          name: "E1",
          type: "available",
          price: 300,
        },
        {
          name: "E2",
          type: "available",
          price: 300,
        },
        {
          name: "E3",
          type: "booked",
          price: 300,
        },
        {
          name: "E4",
          type: "booked",
          price: 300,
        },
        {
          name: "F1",
          type: "available",
          price: 300,
        },
        {
          name: "F2",
          type: "available",
          price: 300,
        },
        {
          name: "F3",
          type: "available",
          price: 300,
        },
        {
          name: "F4",
          type: "available",
          price: 300,
        },
      ],
    };
  },
  computed: {
    selectedSeats() {
      let sc = this.seats.filter((item) => item.type === "selected");
      return sc;
    },
    totalCost() {
      let tC = 0;
      this.selectedSeats.forEach((seat) => {
        tC += seat.price;
      });
      return tC;
    },
  },
  methods: {
    handleKey(i) {
      let clickSeat = this.seats[i];
      if (clickSeat.type === "sold" || clickSeat.type === "booked") {
        alert("You are not Select these Seat!");
        return;
      }
      if (this.selectedSeats.length > 2 && clickSeat.type === "available") {
        alert("You Don't Select More than three seat At a Time!");
        return;
      }
      //Ternary Operator
      clickSeat.type = clickSeat.type === "selected" ? "available" : "selected";
      // if (clickSeat.type === "selected") {
      //   clickSeat.type = "available";
      // } else {
      //   clickSeat.type = "selected";
      // }
    },
  },
  watch: {
    couponCode(newValue, oldValue) {
      if (newValue.length === 10) {
        let searchCoupons = this.coupons.filter(
          (item) => item.code === newValue
        );
        if (searchCoupons.length === 1) {
          this.appliedCoupon = searchCoupons[0];
          this.couponCode = "";
        } else {
          alert("Coupon Not Valid")
          this.couponCode = "";
          return;
        }
      }
    },
  },
});

app.mount("#app");
