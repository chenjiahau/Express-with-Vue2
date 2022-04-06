<template>
  <div id="app" class="container">
    <div class="block" v-if="errorMessage">
       <b-alert variant="danger" show>{{errorMessage}}</b-alert>
    </div>
    <div class="block">
      <button
        class="btn"
        @click="openAdd = !openAdd;addCar()"
        :class="{'btn-primary': !openAdd, 'btn-danger': openAdd}"
      >
        {{buttonName}}
      </button>
    </div>
    <div class="block" v-show="openAdd">
      <div class="form-group block">
        <h5>Car</h5>
        <input type="text" class="form-control" id="car" v-model="newOne.car"/>
      </div>
      <div class="form-group block">
        <h5>Color</h5>
        <input type="text" class="form-control" id="color" v-model="newOne.color"/>
      </div>
      <div class="form-group block">
        <h5>Popular</h5>
        <div>
          <input type="radio" :value="true" v-model="newOne.popular" />
          <label>Yes</label>
        </div>
        <div>
          <input type="radio" :value="false" v-model="newOne.popular" />
          <label>No</label>
        </div>
      </div>
    </div>
    <div class="block">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Color</th>
            <th scope="col">Car</th>
            <th scope="col">Popular</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(car, index) in carList" :key="car.id">
            <th scope="row">{{index + 1}}</th>
            <td>{{field('color', car)}}</td>
            <td>{{field('car', car)}}</td>
            <td>{{field('popular', car)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      errorMessage: null,
      openAdd: false,
      newOne: {
        car: null,
        color: null,
        popular: false
      },
      carList: []
    }
  },
  created() {
    this.$http.get(
      '/api/car/list',
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      })
      .then(
        (response) => {
          return response.json();
        },
        (err) => {
          this.errorMessage = err.body.message;
        }
      )
      .then((data) => {
        if (!this.errorMessage)
          this.carList = data.data;
      })
      // .catch(() => {
      // })
  },
  methods: {
    addCar: function() {
      if (this.openAdd)
        return;

      if (!this.newOne.car)
        return;

      this.carList.push({
        id: this.carList.length + 1,
        car: this.newOne.car,
        color: this.newOne.color,
        popular: this.newOne.popular
      });

      this.openAdd = false;
    }
  },
  computed: {
    buttonName: function() {
      if (!this.openAdd) {
        return 'Add';
      } else {
        return 'Save';
      }
    },
    field: function() {
      return (target, car) => {
        if (target !== 'popular') {
          return car[target];
        } else {
          if (car[target]) {
            return 'Marker';
          }
        }
      }
    }
  }
}
</script>

<style>
  .block {
    margin: 12px 0;
  }

  input {
    margin-right: 6px;
  }
</style>
