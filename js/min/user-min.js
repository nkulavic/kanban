function User(r){this.record=r}User.prototype.has_cap=function(r){try{return!(this.record().caps.indexOf(r)<0)}catch(t){return!1}};