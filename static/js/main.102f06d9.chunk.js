(this["webpackJsonpmukul-todolist"]=this["webpackJsonpmukul-todolist"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(7),l=a.n(n),i=(a(12),a(2)),o=a(3),r=a(0),d=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"modal fade",id:"addTask",role:"dialog","aria-hidden":"true",children:Object(r.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsx)("div",{className:"modal-header",children:Object(r.jsx)("h4",{className:"modal-title",children:"Add / Edit Task"})}),Object(r.jsx)("div",{className:"modal-body",children:Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Summary"}),Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter the summary of task",value:e.valueSummary,onChange:e.onInputSummaryChange})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Description"}),Object(r.jsx)("textarea",{className:"form-control",placeholder:"Enter the description",rows:"3",value:e.valueDesc,onChange:e.onInputDescChange})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-4",children:[Object(r.jsx)("label",{children:"Due Date"}),Object(r.jsx)("input",{type:"date",className:"form-control",value:e.valueDueDate,onChange:e.onInputDueDateChange})]}),Object(r.jsxs)("div",{className:"col-sm",children:[Object(r.jsx)("label",{children:"Priority"}),Object(r.jsxs)("select",{className:"custom-select",onChange:e.onInputPriorityChange,value:e.valuePriorityChange,children:[Object(r.jsx)("option",{value:"none",children:"None"}),Object(r.jsx)("option",{value:"low",children:"Low"}),Object(r.jsx)("option",{value:"medium",children:"Medium"}),Object(r.jsx)("option",{value:"high",children:"High"})]})]})]})]})}),Object(r.jsxs)("div",{className:"modal-footer",children:[Object(r.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Cancel"}),Object(r.jsx)("button",{type:"submit",className:"btn btn-success",onClick:e.onSaveBtn,"data-dismiss":"modal",children:"Save"})]})]})})})})},j=(a(14),function(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],n=a[1],l=e.todoList.filter((function(e){return(""===s||!(!e.title.toLowerCase().includes(s.toLocaleLowerCase())&&!e.priority.toLowerCase().includes(s.toLocaleLowerCase())))&&e})).map((function(t,a){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{className:t.currentState?"done":"",children:Object(r.jsxs)("div",{className:" container-fluid row",children:[Object(r.jsx)("div",{className:"col border p-2","data-toggle":"tooltip",title:t.description,children:t.title}),Object(r.jsx)("div",{className:"col border p-2",children:t.priority}),Object(r.jsx)("div",{className:"col border p-2",children:t.createdAt}),Object(r.jsx)("div",{className:"col border p-2",children:t.dueDate}),Object(r.jsxs)("div",{className:"col border p-2",children:[Object(r.jsx)("i",{className:"btn btn-primary btn-sm fa fa-pencil-square-o ml-2",onClick:function(){return e.onEditTodo(a)},"data-toggle":"modal","data-target":"#editTask"}),Object(r.jsx)("button",{className:t.currentState?"doneBtnClick":"doneBtn",onClick:function(){return e.onCompleteTodo(a)},children:"Done"}),Object(r.jsx)("i",{className:"btn btn-danger btn-sm fa fa-trash-o ml-3",onClick:function(){return e.onDeleteTask(a)}})]})]},a)}),Object(r.jsx)("div",{className:"modal fade",id:"editTask",role:"dialog","aria-hidden":"true",children:Object(r.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-lg",children:Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsx)("div",{className:"modal-header",children:Object(r.jsx)("h4",{className:"modal-title",children:"Add / Edit Task"})}),Object(r.jsx)("div",{className:"modal-body",children:Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Summary"}),Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter the summary of task",value:t.itemEditText,onChange:function(t){var c=t.target.value;e.onChangeEdit(a,c)}})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Description"}),Object(r.jsx)("textarea",{className:"form-control",placeholder:"Enter the description",rows:"3",value:e.valueDesc,onChange:e.onInputDescChange})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-4",children:[Object(r.jsx)("label",{children:"Due Date"}),Object(r.jsx)("input",{type:"date",className:"form-control",value:e.valueDueDate,onChange:e.onInputDueDateChange})]}),Object(r.jsxs)("div",{className:"col-sm",children:[Object(r.jsx)("label",{children:"Priority"}),Object(r.jsxs)("select",{className:"custom-select",onChange:e.onInputPriorityChange,value:e.valuePriorityChange,children:[Object(r.jsx)("option",{value:"none",children:"None"}),Object(r.jsx)("option",{value:"low",children:"Low"}),Object(r.jsx)("option",{value:"medium",children:"Medium"}),Object(r.jsx)("option",{value:"high",children:"High"})]})]})]})]})}),Object(r.jsxs)("div",{className:"modal-footer",children:[Object(r.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:function(){return e.onCancelEditHandler(a)},children:"Cancel"}),Object(r.jsx)("button",{type:"submit",className:"btn btn-success",onClick:function(){return e.onSubmitEditHandler(a)},children:"Save"})]})]})})})]})})),i=e.todoList.map((function(t,a){return Object(r.jsx)(r.Fragment,{children:t.currentState&&Object(r.jsx)("span",{className:t.currentState?"done":"",children:Object(r.jsxs)("div",{className:" container-fluid row",children:[Object(r.jsx)("div",{className:"col border p-2",children:t.title}),Object(r.jsx)("div",{className:"col border p-2",children:t.priority}),Object(r.jsx)("div",{className:"col border p-2",children:t.createdAt}),Object(r.jsx)("div",{className:"col border p-2",children:t.dueDate}),Object(r.jsxs)("div",{className:"col border p-2",children:[Object(r.jsx)("button",{className:t.currentState?"doneBtnClick":"doneBtn",onClick:function(){return e.onCompleteTodo(a)},children:"Done"}),Object(r.jsx)("i",{className:"btn btn-danger btn-sm fa fa-trash-o ml-3",onClick:function(){return e.onDeleteTask(a)}})]})]},a)})})})),d=e.todoList.map((function(t,a){return Object(r.jsx)(r.Fragment,{children:!t.currentState&&Object(r.jsx)("span",{className:t.currentState?"done":"",children:Object(r.jsxs)("div",{className:" container-fluid row",children:[Object(r.jsx)("div",{className:"col border p-2",children:t.title}),Object(r.jsx)("div",{className:"col border p-2",children:t.priority}),Object(r.jsx)("div",{className:"col border p-2",children:t.createdAt}),Object(r.jsx)("div",{className:"col border p-2",children:t.dueDate}),Object(r.jsxs)("div",{className:"col border p-2",children:[Object(r.jsx)("i",{className:"btn btn-primary btn-sm fa fa-pencil-square-o ml-2",onClick:function(){return e.onEditTodo(a)},"data-toggle":"modal","data-target":"#editTask"}),Object(r.jsx)("button",{className:t.currentState?"doneBtnClick":"doneBtn",onClick:function(){return e.onCompleteTodo(a)},children:"Done"}),Object(r.jsx)("i",{className:"btn btn-danger btn-sm fa fa-trash-o ml-3",onClick:function(){return e.onDeleteTask(a)}})]})]},a)})})}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"container mt-3",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-4",children:[Object(r.jsx)("label",{children:"Group By"}),Object(r.jsxs)("select",{className:"custom-select",children:[Object(r.jsx)("option",{disabled:!0,selected:!0,className:"bg-dark",children:"Priority"}),Object(r.jsx)("option",{value:"none",children:"None"}),Object(r.jsx)("option",{value:"low",children:"Low"}),Object(r.jsx)("option",{value:"medium",children:"Medium"}),Object(r.jsx)("option",{value:"high",children:"High"})]})]}),Object(r.jsxs)("div",{className:"col-sm",children:[Object(r.jsx)("label",{children:"Search"}),Object(r.jsx)("form",{className:"form",children:Object(r.jsxs)("div",{className:"input-group",children:[Object(r.jsx)("div",{className:"input-group-prepend",children:Object(r.jsx)("span",{className:"input-group-text",children:Object(r.jsx)("i",{className:"fa fa-search"})})}),Object(r.jsx)("input",{type:"search",className:"form-control",placeholder:"Search Tasks",onChange:function(e){n(e.target.value)}})]})})]})]})}),Object(r.jsx)("div",{className:"container mt-5",children:Object(r.jsxs)("ul",{className:"nav nav-tabs",role:"tablist",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active",href:"#all",role:"tab","data-toggle":"tab",children:"All"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"#pending",role:"tab","data-toggle":"tab",children:"Pending"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"#completed",role:"tab","data-toggle":"tab",children:"Completed"})})]})}),Object(r.jsxs)("div",{className:"tab-content container mt-3",children:[Object(r.jsxs)("div",{role:"tabpanel",className:"tab-pane active",id:"all",children:[Object(r.jsxs)("div",{className:"container-fluid row mb-3",children:[Object(r.jsxs)("div",{className:"col border p-2 font-weight-bold",children:["Summary",Object(r.jsx)("i",{className:"fa fa-sort-desc sort_ic_desc text-white float-right",onClick:e.onSortDataDesc}),Object(r.jsx)("i",{className:"fa fa-sort-asc sort_ic_asc text-white float-right",onClick:e.onSortDataAsc})]}),Object(r.jsxs)("div",{className:"col border p-2 font-weight-bold",children:["Priority",Object(r.jsx)("i",{className:"fa fa-sort-desc sort_ic_desc text-white float-right"}),Object(r.jsx)("i",{className:"fa fa-sort-asc sort_ic_asc text-white float-right"})]}),Object(r.jsxs)("div",{className:"col border p-2 font-weight-bold",children:["Created On",Object(r.jsx)("i",{className:"fa fa-sort-desc sort_ic_desc text-white float-right"}),Object(r.jsx)("i",{className:"fa fa-sort-asc sort_ic_asc text-white float-right"})]}),Object(r.jsxs)("div",{className:"col border p-2 font-weight-bold",children:["Due By",Object(r.jsx)("i",{className:"fa fa-sort-desc sort_ic_desc text-white float-right"}),Object(r.jsx)("i",{className:"fa fa-sort-asc sort_ic_asc text-white float-right"})]}),Object(r.jsx)("div",{className:"col border p-2 font-weight-bold",children:"Actions"})]}),l]}),Object(r.jsxs)("div",{role:"tabpanel",className:"tab-pane fade",id:"pending",children:[Object(r.jsxs)("div",{className:"container-fluid row mb-3",children:[Object(r.jsx)("div",{className:"col border p-2 font-weight-bold",children:"Summary"}),Object(r.jsx)("div",{className:"col border p-2 font-weight-bold",children:"Priority"}),Object(r.jsx)("div",{className:"col border p-2 font-weight-bold",children:"Created On"}),Object(r.jsx)("div",{className:"col border p-2 font-weight-bold",children:"Due By"}),Object(r.jsx)("div",{className:"col border p-2 font-weight-bold",children:"Actions"})]}),d]}),Object(r.jsxs)("div",{role:"tabpanel",className:"tab-pane fade",id:"completed",children:[Object(r.jsxs)("div",{className:"container-fluid row mb-3",children:[Object(r.jsx)("div",{className:"col border p-2 font-weight-bold",children:"Summary"}),Object(r.jsx)("div",{className:"col border p-2 font-weight-bold",children:"Priority"}),Object(r.jsx)("div",{className:"col border p-2 font-weight-bold",children:"Created On"}),Object(r.jsx)("div",{className:"col border p-2 font-weight-bold",children:"Due By"}),Object(r.jsx)("div",{className:"col border p-2 font-weight-bold",children:"Actions"})]}),i]})]})]})}),b=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),l=Object(o.a)(n,2),b=l[0],m=l[1],h=Object(c.useState)(""),u=Object(o.a)(h,2),O=u[0],x=u[1],v=Object(c.useState)(""),f=Object(o.a)(v,2),p=f[0],N=f[1],g=Object(c.useState)([]),C=Object(o.a)(g,2),w=C[0],y=C[1],D=function(e){return(e<10?"0":"")+e},S=new Date,k=D(S.getMonth()+1),E=D(S.getDate()),T=S.getFullYear()+"-"+k+"-"+E,L=function(e){localStorage.setItem("todoList",JSON.stringify(e))};Object(c.useEffect)((function(){localStorage.getItem("todoList")&&y(JSON.parse(localStorage.getItem("todoList")))}),[]);var _=function(e,t,a,c){if(e.trim()&&t.trim()&&a.trim()&&c.trim()&&e.length>=10&&e.length<=140&&t.length>=10&&t.length<=500){var n=Object(i.a)(w);n.push({currentState:!1,title:e,description:t,createdAt:T,dueDate:a,priority:c,isEdit:!1,itemEditText:e}),s(""),m(""),x(""),N(""),y(n),L(n)}else alert("Please Enter the task\nCheck length of summary - min-10 char & max-140 char\nCheck length of description - min-10 char & max-500 char"),s(""),m(""),x(""),N("")};return Object(r.jsxs)("div",{children:[Object(r.jsx)(d,{onInputSummaryChange:function(e){var t=e.target.value;s(t)},valueSummary:a,onInputDescChange:function(e){var t=e.target.value;m(t)},valueDesc:b,onInputDueDateChange:function(e){var t=e.target.value;x(t)},valueDueDate:O,onInputPriorityChange:function(e){var t=e.target.value;N(t)},valuePriorityChange:p,onSaveBtn:function(){_(a,b,O,p)}}),Object(r.jsx)(j,{todoList:w,onDeleteTask:function(e){if(!0===window.confirm("Are you sure!!!...\nYou want to delete...!!!")){var t=Object(i.a)(w);t.splice(e,1),y(t),L(t)}},onCompleteTodo:function(e){var t=Object(i.a)(w);t[e].currentState=!t[e].currentState,y(t),L(t)},onEditTodo:function(e){var t=Object(i.a)(w);t[e].isEdit=!0,y(t),L(t)},onSubmitEditHandler:function(e){var t=Object(i.a)(w);t[e].title=t[e].itemEditText,t[e].isEdit=!1,y(t),L(t)},onCancelEditHandler:function(e){var t=Object(i.a)(w);t[e].itemEditText=t[e].title,t[e].isEdit=!1,y(t),L(t)},onChangeEdit:function(e,t){var a=Object(i.a)(w);a[e].itemEditText=t,y(a),L(a)},onSortDataAsc:function(){var e=Object(i.a)(w);e.sort((function(e,t){return e.title.toLowerCase()<t.title.toLowerCase()?-1:e.title.toLowerCase()>t.title.toLowerCase()?1:0})),y(e),L(e)},onSortDataDesc:function(){var e=Object(i.a)(w);e.sort((function(e,t){return e.title.toLowerCase()>t.title.toLowerCase()?-1:e.title.toLowerCase()<t.title.toLowerCase()?1:0})),y(e),L(e)}})]})},m=(a(15),function(){return Object(r.jsxs)("div",{className:"container mt-4 w-75",children:[Object(r.jsxs)("h1",{children:["ToDo App",Object(r.jsx)("i",{className:"mt-2 mr-4 fa fa-plus-circle float-right addTask_ic","data-toggle":"modal","data-target":"#addTask"})]}),Object(r.jsx)(b,{})]})});var h=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(m,{})})};a(16);l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.102f06d9.chunk.js.map