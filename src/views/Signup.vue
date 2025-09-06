<script setup>
import router from '@/router';
import { useDataStore } from '@/stores/counter';


const userData=useDataStore()

const formData={name:"",email:"", password:''}
//validation and submit handling
$(function () {

  $.validator.setDefaults({
    submitHandler: function () {
        // authorization of User
  
    const check=userData.users[0].email==formData.email
if(check){
  
    router.push('/login')
    alert('email already registed')
}
else{
 userData.users.push(formData)

  console.log(userData.users)

    alert("successfully registed please login")
    router.push('/login')
}

 
    
    }
  });
  $('#quickForm').validate({
    rules: {
        name:{
        required:true,
         minlength: 3
        },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 5
      },
      terms: {
        required: true
      },
    },
    messages: {
        name:{ required:"Please enter Name",
            name:'Name Must be at least 3 characters long'
        },
      email: {
        required: "Please enter a email address",
        email: "Please enter a valid email address"
      },
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      terms: "Please accept our terms"
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
      error.addClass('invalid-feedback');
      element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass('is-invalid');
    }
  });
});
const HandleSubmit=()=>{
    // checking user already registered or not
const check=userData.users[0].email==formData.email
if(check){
    router.push('/login')
    alert('email already registed')
}
else{
    alert("successfully registed please login")
    router.push('./login')
}

//

}
</script>

<template>
      <section class="content">
      <div class="container-">
        <div class="row">
          <!-- left column -->
          <div class="col-sm-12 col-md-7">
            <!-- jquery validation -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">SignUp <small><i class=" fas fa-book mx-2"></i></small></h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form   id="quickForm">
                <div class="card-body">
                       <div class="form-group">
                    <label for="Harsh kapoor">Name</label>
                    <input type="name" v-model="formData.name" name="name" class="form-control" id="exampleInputName1" placeholder="Enter Name" >
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" v-model="formData.email" name="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" >
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" v-model="formData.password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  
                  <div class="form-group mb-0">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" name="terms" class="custom-control-input" id="exampleCheck1">
                      <label class="custom-control-label" for="exampleCheck1">I agree to the <a href="#">terms of service</a>.</label>
                    </div>
                  </div>
                  <router-link to="/login">Already have an account</router-link>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
            </div>
          <!--/.col (left) -->
          <!-- right column -->
          <div class="col-md-6">

          </div>
          <!--/.col (right) -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>


    </template>