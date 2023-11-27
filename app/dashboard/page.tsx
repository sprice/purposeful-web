import { PlusIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import { HeaderSection, Layout } from "@/components"

export default function Dashboard() {
  return (
    <Layout>
      <HeaderSection
        eyebrow="Level up your learning"
        title="Eduction"
        description=""
      >
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="w-full sm:w-1/2">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor.
            </p>
            <p mb-4>
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="mb-4">
              <Image
                src="/images/screenshot-1.png"
                width={2432}
                height={1298}
                alt="Screenshot of Purposeful 1:1 Education"
              />
            </p>
          </div>
        </div>
      </HeaderSection>
      <HeaderSection eyebrow="Getting Aligned" title="Offsites" description="">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="w-full sm:w-1/2">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor.
            </p>
            <p>
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            </p>
          </div>
          <div className="w-full sm:w-1/2 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-semibold text-gray-900">
              No offsite projects
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by creating a new offsite project.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <PlusIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5"
                  aria-hidden="true"
                />
                New Offsite
              </button>
            </div>
          </div>
        </div>
      </HeaderSection>
    </Layout>
  )
}
