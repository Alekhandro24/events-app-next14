import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = async () => {
  const events = await getAllEvents({
    query: "",
    category: "",
    page: 1,
    limit: 6,
  });

  console.log(events);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid fgrid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="p-regular-20md:p-regular-24 ">
              Book and helpful tips from +,168+ mentors in word-class companies
              with our global community.
            </p>

            <Button size="lg" className="button w-full sm:w-fit">
              <Link href="#events">Explore now</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={10000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trust by <br /> Thousands Events
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search CategorieFilter
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPage={2}
          urlParamName=""
        />
      </section>
    </>
  );
};

export default Home;
