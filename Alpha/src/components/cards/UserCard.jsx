import usercard from "../../assets/usercard.png";
import "../../index.css";

const UserId = [
  {
    userId: 1,
    profileImage: usercard,
    name: "Mercry Oloche",
    email: "mercy323r@gmail.com",
  },

  {
    userId: 12,
    profileImage: usercard,
    name: "Agbesanya Olusanya",
    email: "olusanya323r@gmail.com",
  },
];

const PropsCard = ({ userId, profileImage, name, email }) => {
  return (
    <div className="border-2 border-gray w-80 h-auto mb-2 ml-5 p-8 bg-[#3B396B] bg-opacity-90 rounded-md font-serif">
      <div key={userId} className="flex gap-5 w-auto mb-5">
        <img src={profileImage} alt={name} className="h-12 w-11" />
        <div className="">
          <h3 className="mb-1 text-white w-auto text-base font-semibold opacity-90 ">
            {name}
          </h3>
          <p className="text-white text-xs font-medium opacity-90 ">{email}</p>
        </div>
      </div>

      <p className="text-white text-xs font-normal opacity-90 text-center">
        You’re currently on a free plan
      </p>
      <p className="text-white text-xs font-medium w- opacity-90 text-center mt-3 bg-[#191E56] p-3 rounded-lg">
        Upgrade plan
      </p>
    </div>
  );
};

const UserCard = () => {
  return (
    <section className="">
      <div className="user-card-container">
        {UserId.map(({ userId, profileImage, name, email }) => (
          <PropsCard
            key={userId}
            userId={userId}
            profileImage={profileImage}
            name={name}
            email={email}
          />
        ))}
      </div>
    </section>
  );
};

export default UserCard;
