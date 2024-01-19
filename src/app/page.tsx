import Navbar from "@/components/Navbar";
import BubbleChat from "@/components/Chat/BubbleChat";
export default function Home() {
  return (
    <main className="flex flex-col w-full lg:w-1/3 bg-white min-h-[100dvh]">
      <Navbar />
      <div className="flex flex-col flex-1 py-2 px-4">
        <BubbleChat data={{ role: 2, date: '' }}>Test</BubbleChat>
        <BubbleChat data={{ role: 1, date: '' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod possimus cum quo itaque obcaecati molestias dolorem ea ad accusantium necessitatibus placeat blanditiis, numquam sapiente qui! Alias at nihil ipsa culpa.
        </BubbleChat>
      </div>
      <div className="flex justify-center py-2 px-8 sticky bottom-0 bg-white">
        <input type="text" placeholder="Send Message..." className="input input-bordered border-[#DEDEDE] bg-white w-full" />
      </div>
    </main >
  );
}
