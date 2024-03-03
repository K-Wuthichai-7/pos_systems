import Button from 'react-bootstrap/Button';
import { useMsal } from '@azure/msal-react';

export const SignInButton = () => {
    const {instance} = useMsal()
    
    const handleSignIn = () => {
        instance.loginRedirect({
            scopes: ['user.read']
        })
    }
    return (
        <Button variant='primary' onClick={handleSignIn}>Sign in</Button>
    )
};