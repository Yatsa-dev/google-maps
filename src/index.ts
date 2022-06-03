import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const custopMap = new CustomMap('map');

custopMap.addMarker(user);
custopMap.addMarker(company);
