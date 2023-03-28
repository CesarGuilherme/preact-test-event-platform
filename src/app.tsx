import { gql, useQuery } from "@apollo/client";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lessons {
  id: string;
  title: string;
}

export function App() {
  const { data } = useQuery<{ lessons: Lessons[] }>(GET_LESSONS_QUERY);

  console.log(data);

  return (
    <ul>
      {data?.lessons.map((lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>;
      })}
    </ul>
  );
}
