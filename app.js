var app = Vue.createApp({
  data() {
    return {
      seatStates: {
        solid: {
          text: "Solid",
          color: "#ff0000",
        },
        available: {
          text: "Available",
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
    };
  },
});

app.mount("#app");
