import { Router } from 'express';
import * as AclController from '../controllers/acl.controller';
const aclRouter = new Router();

// Get all Acls
aclRouter.route('/acls').get(AclController.getAcls);

// Get one acl by cuid
aclRouter.route('/acls/:cuid').get(AclController.getAcl);

// Add a new Acl
aclRouter.route('/acls').post(AclController.addAcl);

// Delete a acl by cuid
aclRouter.route('/acls/:cuid').delete(AclController.deleteAcl);

export default aclRouter;
