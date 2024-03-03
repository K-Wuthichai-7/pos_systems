
import { useMsal } from '@azure/msal-react';

export const SignOutButton = () => {
    const {instance} = useMsal();

    const handleSignOut = () => {
        instance.logout();
        }
    return (
        <div className='h6' onClick={handleSignOut}>ออกจากระบบ</div>
    )
};