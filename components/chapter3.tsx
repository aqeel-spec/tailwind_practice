import React from "react";

function Chapter() {
  return (
    <>
      <div className="title">
        <span className="text-sm">Chapter3 {" : "}</span>
        Typegraphy
      </div>
      <div className="py-4">
        <div className="">
          <div className="underline">underline</div>
          <div className="overline">overline</div>
          <div className=" line-through ">line through</div>
        </div>
        <div className="">
          <div className=" underline decoration-solid">
            underline & decoration-solid
          </div>
          <div className=" decoration-double underline">
            underline & decoration-double
          </div>
          <div className=" decoration-dotted underline">
            underline & decoration- dotted
          </div>
          <div className=" decoration-dashed underline">
            underline & decoration-dashed
          </div>
          <div className="decoration-wavy underline">
            underline & decoration-wavy
          </div>
        </div>
        <div className="">
          <h1>Fonts of different styles</h1>
          <div className="font-hairline">font-hairline</div>
          <div className="font-thin">font-thin</div>
          <div className="font-light">font-light</div>
          <div className="font-normal">font-normal</div>
          <div className="font-medium">font-medium</div>
          <div className="font-semibold">font-semibold</div>
          <div className="font-bold">font-bold</div>
          <div className="font-extrabold">font-extrabold</div>
          <div className="font-black">font-black</div>
        </div>
        <div className="">
          <h1>Aplhabet styles</h1>
          <div className="uppercase">upper-CaSe</div>
          <div className="lowercase">lower-CaSe</div>
          <div className="capitalize">capitalize-CaSe</div>{" "}
          <div className="normal-case">normal-CaSe</div>
        </div>
        <div className="border-b-2">
          <h1>Now we start building actual header</h1>
          <h2 className="text-xl">Subtitle</h2>
          <h1 className="text-3xl font-semibold">Title</h1>
        </div>
        <div className="">
          <h1 className="text-4xl font-bold">Title</h1>
          <h2 className="text-2xl font-semibold">Subtitle</h2>
          <h3 className="text-lg font-medium italic">Header</h3>
        </div>
        <div className=" divide-y-2">
          <h1>All Colors</h1>
          <div className="bg-slate-500 w-full">Slate</div>
          <div className="bg-gray-500 w-full">Gray</div>
          <div className=" bg-zinc-500 w-full">Zinc</div>
          <div className=" bg-neutral-500 w-full">Netural</div>
          <div className="bg-red-500 w-full">Red</div>
          <div className="bg-orange-500 w-full">Orange</div>
          <div className="bg-pink-500 w-full">Pink</div>
          <div className="bg-rose-500 w-full">Rose</div>
          <div className="bg-amber-500 w-full">Amber</div>
          <div className="bg-yellow-500 w-full">Yellow</div>
          <div className="bg-lime-500 w-full">bg-lime-500</div>
          <div className="bg-green-500 w-full">bg-green-500</div>
          <div className="bg-emerald-500 w-full">bd-emerald-500</div>
          <div className="bg-teal-500 w-full">bg-teal-500</div>
          <div className="bg-cyan-500 w-full">bg-cyan-500</div>
          <div className="bg-sky-500 w-full">bg-sky-500</div>
          <div className="bg-blue-500 w-full">bg-blue-500</div>
          <div className="bg-indigo-500 w-full">bg-indigo-500</div>
          <div className="bg-violet-500 w-full">bg-violet-500</div>
          <div className="bg-purple-500 w-full">bg-purple-500</div>
          <div className="bg-fuchsia-500 w-full">bg-fuscsia-500</div>
          <div className="caret-fuschia-300">caret-fuschia-300</div>
        </div>
        <div className="">
          <p className="tracking-tight hover:tracking-wide selection:font-bold selection:bg-red-400 first-letter:text-9xl first-letter:font-bold first-line:text-2xl">
            The quick brown fox Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Corrupti sint voluptatibus, voluptate eveniet
            nisi, velit vel incidunt excepturi reprehenderit tenetur at!
            Similique, voluptatem corporis fugiat nobis neque atque expedita
            dolorem?
          </p>
          <p className="tracking-norma hover:tracking-wide selection:font-bold selection:bg-red-400 first-letter:text-9xl first-letter:font-bold first-line:text-2xl">
            The quick brown fox Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eaque quidem obcaecati cum vero, mollitia rem
            ullam. Laboriosam ad voluptatem minus laudantium reiciendis facilis
            veniam officiis sunt necessitatibus! Asperiores, doloremque labore!
          </p>
          <p className=" first-line:uppercase  first-letter:mr-3 first-letter:text-slate-900 first-letter:text-9xl first-line:tracking-widest first-letter:font-bold">
            The quick brown fox Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Asperiores necessitatibus impedit, fugiat facere
            animi autem. Cum recusandae nihil id sed natus vero culpa. At amet
            dolore provident fuga, tenetur aperiam.
          </p>
          <span className="before::border-l-4" />
        </div>
        <div className="columns-2 pt-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ad
            omnis autem officia quo architecto quod ipsam facere voluptate!
            Officia maiores pariatur repudiandae velit tempora voluptatem
            delectus accusamus doloremque maxime?.
          </p>
          <p className="hover:break-before-column">Sure, go ahead, laugh...</p>
          <p>Maybe we can live without...</p>
          <p>Look. If you think this is...</p>
        </div>
        <article className="prose pt-[150px] column-1">
          All your text Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Non, laboriosam. Pariatur debitis explicabo numquam. Culpa
          quibusdam perspiciatis corrupti sunt esse, nam, praesentium fugiat
          incidunt, recusandae accusamus ut eaque. Sint, dolorem.
        </article>
        <article className="prose prose-sm">
          All your text Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Possimus libero eius dignissimos illo quae voluptatum neque
          molestias ducimus, recusandae labore sed suscipit, placeat modi soluta
          at quasi quaerat ut. Officia.
        </article>
      </div>
      <div className="text-center items-center justify-center bg-red-100">
        <article className="prose lg:prose-xl">
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>
      </div>
    </>
  );
}

export default Chapter;
