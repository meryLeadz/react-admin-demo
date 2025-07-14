import { defaultLightTheme, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="phone" />
        </SimpleShowLayout>
    </Show>
);

export default UserShow;   