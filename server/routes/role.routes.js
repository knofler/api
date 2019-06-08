import { Router } from 'express';
import * as RoleController from '../controllers/role.controller';
const roleRouter = new Router();

// Get all Roles
roleRouter.route('/roles').get(RoleController.getRoles);

// Get one role by cuid
roleRouter.route('/roles/:cuid').get(RoleController.getRole);

// Add a new Role
roleRouter.route('/roles').post(RoleController.addRole);

// Delete a role by cuid
roleRouter.route('/roles/:cuid').delete(RoleController.deleteRole);

export default roleRouter;
