import { Datagrid, List, ReferenceField, TextField, SimpleList } from 'react-admin';

const PostList = () => (
    <List>
        <SimpleList
            primaryText={(record) => record.title}
            secondaryText={(record) => record.body}
        />
    </List>
);

export default PostList;