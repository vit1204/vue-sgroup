

<template>
  <div class="search-bar flex justify-around mx-30 my-4">
    <input @input="event => search = event.target.value" type="text" name="" id="" placeholder="Search User"
      class="px-1 py-1 border-slate-700 border-solid border-2" />
    <button class="px-3 py-2 bg-sky-600 text-white">+ Create New</button>
  </div>
  <table class="table-auto w-full px-20 mt-5">
    <thead class="text-xs text-gray-700 uppercase py-4 bg-white">
      <tr scope="col" class="px-8 py-3 bg-white">
        <th v-for="column in tableColumns " class="px-5 text-black">
          {{ column }}
        </th>

      </tr>
    </thead>

    <tbody>
      <tr v-for="user in filterUser" :key="user">
        <td class="py-4 ">
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full " :src="avatar" alt="avatar" />
            <div class="mx-3">
              <p>{{ user.name }}</p>
              <b>{{ user.email }}</b>
            </div>
          </div>
        </td>
        <td class="px-3">{{ user.age }}</td>


        <td class="px-4">{{ user.gender }}</td>
        <td class="px-5">{{ user.CreatedAt }}</td>
        <td class="relative">
          <buttonAction :user="user" @deleteUser="onDeleteUser" @showForm="formId = user.id" />


        </td>
        <UpdateForm :user="user"   @hideForm=" formId = null" v-show="user.id === formId" />
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import UpdateForm from '../../src/components/user/UpdateForm.vue';
import buttonAction from '../../src/components/icons/buttonAction.vue';
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import axios from 'axios';

let formId = ref(null)
const search = ref('')

const UserList = ref([])

const name = ref('')
const age = ref('')
const email = ref('')


let avatar = "https://i.pravatar.cc/300"
const tableColumns = [
  "user",
  "age",
  "gender",
  "Created At",
  "actions"
]



const getUser = () => {
  axios.get('http://localhost:3000/user/getUser').then((res) => {
    UserList.value = res.data.data
    console.log(UserList.value)
  })
}
onBeforeMount(async () => {
  await getUser()
})




const onDeleteUser = async (id) => {

  try {
    await axios.delete(`http://localhost:3000/user/${id}`
    )

    window.location.reload()

  }
  catch (error) {
    console.log(error)

  }
}

const updateUser = async (id) => {

  try {
    const { data: respData } = await axios({
      method: "put",
      url: `http://localhost:3000/user/${id}`,
      data: {
        name: name.value,
        age: parseInt(age.value),
        email: email.value
      }
    })
    console.log('respData', respData)
    // const res = await axios.put(`http://localhost:3000/user/${id}`, {

    //   name: name.value,
    //   age: parseInt(age.value),
    //   email: email.value
    // })
    // getUser()
    // console.log(res.data)
    // window.location.reload()
  }
  catch (error) {
    console.log(error)
  }
}


const filterUser = computed(() => {
  if (!search.value) {
    return UserList.value
  }
  return UserList.value.filter((user) => {
    for (key in user) {
      if (!user[key]) continue;
      if (user[key].toLowerCase().includes(search.value)) {
        return user
      }
    }
  })

})


</script>
