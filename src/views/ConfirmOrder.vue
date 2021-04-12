<template>
  <div v-if="show" class="m-20 font-mono text-xl">
    <form class="inline-block">
      <div class="mb-6 md:flex md:items-center">
        <div class="md:w-1/3">
          <label
            class="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
          >
            Full Name:
          </label>
        </div>
        <div>
          <input
            v-model="user.name"
            class="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            :class="{ 'is-invalid': submitted && $v.user.name.$error }"
          />
          <div v-if="submitted && $v.user.name.$error" class="invalid-feedback">
            <span class="text-red-500" v-if="!$v.user.name.required">
              Name is required</span
            >
          </div>
        </div>
      </div>
      <div class="mb-6 md:flex md:items-center">
        <div class="md:w-1/3">
          <label
            class="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
          >
            Address :
          </label>
        </div>
        <div>
          <input
            v-model="user.address"
            :class="{ 'is-invalid': submitted && $v.user.address.$error }"
            class="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
          />
          <div
            v-if="submitted && $v.user.address.$error"
            class="invalid-feedback"
          >
            <span class="text-red-500" v-if="!$v.user.address.required">
              Address is required</span
            >
          </div>
        </div>
      </div>
      <div class="mb-6 md:flex md:items-center">
        <div class="md:w-1/3">
          <label
            class="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
          >
            Phone :
          </label>
        </div>
        <div>
          <input
            v-model="user.phone"
            class="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            :class="{ 'is-invalid': submitted && $v.user.phone.$error }"
          />
          <div
            v-if="submitted && $v.user.phone.$error"
            class="invalid-feedback"
          >
            <span class="text-red-500" v-if="!$v.user.phone.required">
              Phone number is required</span
            >
            <span class="text-red-500" v-if="!$v.user.phone.integer"
              >Only accept integer value</span
            >
          </div>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            @click="Submit"
            class="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { required, integer } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      data: true,
      user: {
        name: '',
        address: '',
        phone: '',
      },
      submitted: false,
    }
  },
  validations() {
    return {
      user: {
        name: { required },
        address: { required },
        phone: {
          required,
          integer,
        },
      },
    }
  },
}
</script>
