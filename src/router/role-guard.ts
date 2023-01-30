import { RouteLocation } from "vue-router";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
    console.log(to, from, next);
    const userRole = localStorage.getItem('userRole');

    if (userRole === "Admin") {
        next();
    } else {
        alert('Sorry, you can\'t pass! You are not admin.');
        
        next({ name: "home"})
    }
};

export default haveRoleGuard;