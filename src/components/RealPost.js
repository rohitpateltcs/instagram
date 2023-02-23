import {
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const RealPost = async ({ PostImg }) => {
  return (
    <div className="border-2 mx-2 rounded-sm mb-4">
      {/* Real Post header */}
      <div className="flex justify-between p-2">
        <div className="flex space-x-4">
          <div>
            <img src={PostImg} alt="" className="h-8" />
          </div>
          <div>
            <div className="">
              <h2 className="font-bold text-sm">cristiano</h2>
            </div>
            <div>
              <p className="text-xs font-serif">Paid Partnership</p>
            </div>
          </div>
        </div>
        <div>
          <EllipsisHorizontalIcon className="h-6" />
        </div>
      </div>

      {/* Real post Image */}
      <div>
        <img src={PostImg} alt="" className="w-full h-[430px]" />
      </div>
      {/* Real post icons */}

      <div className="p-2">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <HeartIcon className="postIcon" />
            <ChatBubbleOvalLeftIcon className="postIcon" />
            <PaperAirplaneIcon className="postIcon" />
          </div>
          <div>
            <BookmarkIcon className="postIcon" />
          </div>
        </div>
        {/* Real post Likes */}
        {/* Real post description  and View all comment*/}
        <div className="">
          <div>
            <p className="space-x-1">
              <span className="font-medium ">123154</span>
              <span className="text-gray-700">Likes</span>
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold text-sm">critinao</span> The confort of
              being able to wear on any occasion is real
            </p>
          </div>
        </div>
        <div>
          <div>
            <p>View all 77456 comments</p>
          </div>
          <div>
            <span className="font-medium text-sm">rickiden</span> Lets go you
            are greatest all time
          </div>
        </div>
      </div>

      {/* Comment */}
      {/* Input comment */}
    </div>
  );
};

export default RealPost;
