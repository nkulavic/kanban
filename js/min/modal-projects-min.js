function Modal_Projects(r){$(document).trigger("/modal-projects/init/",r),this.$el=r,this.dom()}Modal_Projects.prototype.board=function(){return boards[current_board_id]},Modal_Projects.prototype.dom=function(){var r=this;r.$el.on("show.bs.modal",function(){var r=$("#accordion-projects").empty(),o=boards[current_board_id];for(var e in o.record.project_records){var t=o.record.project_records[e],a=templates["t-modal-project"].render(t);$(a).appendTo(r)}}),r.$el.on("click",".btn-delete",function(){var o=$(this),e=o.closest(".panel"),t=o.attr("data-id"),a=r.board().record.project_records[t],c={project:a,action:"delete_project",kanban_nonce:$("#kanban_nonce").val()};$.ajax({method:"POST",url:ajaxurl,data:c}).done(function(o){delete a;for(var c in r.board().record.tasks){var n=r.board().record.tasks[c];n.record.project_id==t&&n.project_save(0)}e.remove()})}),r.$el.on("focus",".project-title",function(){var r=$(this);r.data("orig",r.val())}),r.$el.on("keyup",".project-title",function(r){var o=$(this);if(13==r.keyCode)return o.trigger("blur"),!1;if(27==r.keyCode){var e=o.data("orig");return o.val(e).trigger("blur"),!1}}),r.$el.on("blur",".project-title",function(){var o=$(this),e=o.closest(".panel"),t=o.val(),a=o.attr("data-id"),c=r.board().record.project_records[a];c.title=t;var n={project:c,action:"save_project",kanban_nonce:$("#kanban_nonce").val()};$.ajax({method:"POST",url:ajaxurl,data:n}).done(function(o){$(".label-project-title",e).text(t);for(var c in r.board().record.tasks){var n=r.board().record.tasks[c];n.record.project_id==a&&n.project_save(a)}})})};