import Post from "../post/Post";
import "./posts.scss";

const post = () => {
  const posts = [
    {
      id: 1,
      name: "Kylie Jenner",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/4909818/pexels-photo-4909818.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Feeling grateful for another year of laughter, love, and personal growth. Cheers to a happy and healthy new year!",
      img: "https://images.pexels.com/photos/15031643/pexels-photo-15031643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      name: "Anya-taylor joy",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/4909818/pexels-photo-4909818.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Nature's beauty on full display: just took a hike and the view from the top was breathtaking. ",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default post;
