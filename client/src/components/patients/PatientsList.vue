<template></template>

<script>
import PatientService from "../services/PatientService"

export default {
  name: "new-patient",
  data() {
    return {
      patient: {
        id: null,
        name: "",
        cpf: "",
        birth_date: "",
        locaction: { postal_code: "", state: "", city: "", address: "", number: "" },
        sex: "",
        diagnosis: "",
        telephone: "",
        employee: false
      },
      submitted: false
    }
  },
  methods: {
    savePatient() {
      var data = {
        name: this.patient.name,
        cpf: this.patient.cpf
        birth_date: this.patient.birth_date
        locaction: this.patient.locaction
        sex: this.patient.sex
        diagnosis: this.patient.diagnosis
        telephone: this.patient.telephone
        employee: this.patient.employee
      }
      PatientService.create(data)
        .then(response => {
          this.patient.id = response.data.id
          console.log(response.data)
          this.submitted = true;
        })
        .catch(e => {
          console.log(e)
        })
    },
    newPatient() {
      this.submitted = false
      this.patient = {}
    }
  }
};
</script>

<style>
</style>