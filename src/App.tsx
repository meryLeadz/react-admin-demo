import { Admin, Resource, ListGuesser, ShowGuesser } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./posts/post-list";

export const App = () => (
    <Admin layout={Layout} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} />
        {/* <Resource name="users" list={ListGuesser}/> */}
    </Admin>
);

