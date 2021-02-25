import request from "../services/request";
import upload from "@/services/upload";
import constantApi from "../constants/constantApi";


const getListTodoUsers = params => {
  return request({
    url: constantApi.BASE_API,
    method: "GET",
    params: params
  });
};
const addTodoUsers = params => {
  return upload({
    url: constantApi.BASE_API,
    method: "POST",
    data: params
  });
};


export {
  getListTodoUsers,
  addTodoUsers
}
