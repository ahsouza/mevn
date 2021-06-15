import http from '../middlewares/axios'

class PacienteService {
  getAll() {
    return http.get("/patients")
  }

  get(id) {
    return http.get(`/patients/${id}`)
  }

  create(data) {
    return http.post("/patients", data)
  }

  update(id, data) {
    return http.put(`/patients/${id}`, data)
  }

  delete(id) {
    return http.delete(`/patients/${id}`)
  }

  deleteAll() {
    return http.delete(`/patients`)
  }

  findByCpf(cpf) {
    return http.get(`/patients?cpf=${cpf}`)
  }

  findByName(name) {
    return http.get(`/patients?name=${name}`)
  }

  findByBirthDate(birth) {
    return http.get(`/patients?birth_date=${birth}`)
  }

  findBySex(sex) {
    return http.get(`/patients?sex=${sex}`)
  }

  findByDiagnosis(diagnosis) {
    return http.get(`/patients?diagnosis=${diagnosis}`)
  }

  findByTelephone(telephone) {
    return http.get(`/patients?telephone=${telephone}`)
  }
}

export default new PacienteService()