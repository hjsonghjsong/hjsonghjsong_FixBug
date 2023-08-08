import * as React from "react";
import Box from "@mui/material/Box";

function PersonalDetails() {
  return (
    <div className="w-[1440px] h-[1450px] px-20 pb-[62px] bg-white flex-col justify-start items-center gap-[30px] inline-flex">
      <div className="justify-start items-start inline-flex">
        <div className="self-stretch px-40 py-5 bg-gray-900 border border-gray-700 justify-center items-center gap-2.5 flex">
          <div className="h-[46px] px-8 justify-between items-center gap-[579px] flex">
            <div className="justify-start items-center gap-16 flex">
              <div className="justify-start items-center gap-8 flex">
                <div className="rounded justify-center items-center gap-1.5 flex">
                  <div className="text-white text-[20px] font-bold leading-snug">
                    MyCareerCoach
                  </div>
                </div>
                <div className="rounded justify-center items-center gap-1.5 flex">
                  <div className="text-white text-[15px] font-semibold leading-snug">
                    Dashboard
                  </div>
                </div>
                <div className="flex-col justify-center items-start gap-2 inline-flex">
                  <div className="self-stretch h-[22px] rounded justify-start items-center gap-3 inline-flex">
                    <div className="text-white text-[15px] font-semibold leading-snug">
                      Resumes
                    </div>
                  </div>
                </div>
                <div className="rounded" />
              </div>
            </div>
            <div className="justify-end items-center gap-6 flex">
              <div className="px-[18px] py-3 bg-blue-500 rounded-md shadow justify-center items-center gap-1.5 flex">
                <div className="text-white text-[15px] font-semibold leading-snug">
                  My Account
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-start items-start inline-flex">
        <div className="self-stretch justify-start items-start gap-1 flex">
          <div className="flex-col justify-start items-center gap-2 inline-flex">
            <div className="w-8 h-8 bg-blue-500 rounded-2xl flex-col justify-center items-center flex">
              <div className="w-4 h-4 relative" />
            </div>
          </div>
          <div className="w-8 h-8 relative">
            <div className="w-8 h-[0px] left-0 top-[16px] absolute border border-blue-400"></div>
          </div>
          <div className="flex-col justify-start items-center gap-2 inline-flex">
            <div className="w-8 h-8 bg-white rounded-2xl border border border border border-blue-400 flex-col justify-center items-center flex">
              <div className="text-center text-blue-500 text-[16px] font-medium leading-normal">
                2
              </div>
            </div>
          </div>
          <div className="w-8 h-8 relative">
            <div className="w-8 h-[0px] left-0 top-[16px] absolute border border-zinc-200"></div>
          </div>
          <div className="flex-col justify-start items-center gap-2 inline-flex">
            <div className="w-8 h-8 bg-white rounded-2xl border border border border border-zinc-200 flex-col justify-center items-center flex">
              <div className="text-center text-gray-500 text-[16px] font-medium leading-normal">
                3
              </div>
            </div>
          </div>
          <div className="w-8 h-8 relative">
            <div className="w-8 h-[0px] left-0 top-[16px] absolute border border-zinc-200"></div>
          </div>
          <div className="flex-col justify-start items-center gap-2 inline-flex">
            <div className="w-8 h-8 bg-white rounded-2xl border border border border border-zinc-200 flex-col justify-center items-center flex">
              <div className="text-center text-gray-500 text-[16px] font-medium leading-normal">
                4
              </div>
            </div>
          </div>
          <div className="w-8 h-8 relative">
            <div className="w-8 h-[0px] left-0 top-[16px] absolute border border-zinc-200"></div>
          </div>
          <div className="flex-col justify-start items-center gap-2 inline-flex">
            <div className="w-8 h-8 bg-white rounded-2xl border border border border border-zinc-200 flex-col justify-center items-center flex">
              <div className="text-center text-gray-500 text-[16px] font-medium leading-normal">
                5
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-32 px-8 py-3 flex-col justify-start items-start gap-3 flex">
        <div className="self-stretch h-[104px] px-8 flex-col justify-center items-center gap-3 flex">
          <div className="h-[104px] flex-col justify-center items-center gap-2 flex">
            <div className="self-stretch h-[104px] flex-col justify-start items-center gap-4 flex">
              <div className="self-stretch text-center text-gray-800 text-[32px] font-bold leading-10">
                Personal Details
              </div>
              <div className="self-stretch text-center text-gray-500 text-[16px] font-normal leading-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[724px] p-8 bg-gray-50 flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch p-2.5 justify-center items-start gap-2.5 inline-flex">
          <div className="flex-col justify-start items-start inline-flex">
            <div className="h-[74px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-gray-800 text-[14px] font-medium leading-tight">
                Name
              </div>
              <div className="self-stretch h-[46px] px-4 py-3 bg-white rounded-md shadow border border border border border-zinc-200 justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-[22px] justify-start items-start gap-2 flex">
                  <div className="grow shrink basis-0 text-gray-400 text-[15px] font-normal leading-snug">
                    Input
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[564px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch text-gray-800 text-[14px] font-medium leading-tight">
              City
            </div>
            <div className="self-stretch h-[46px] px-4 py-3 bg-white rounded-md shadow border border border border border-zinc-200 justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 h-[22px] justify-start items-start gap-2 flex">
                <div className="grow shrink basis-0 text-gray-400 text-[15px] font-normal leading-snug">
                  Input
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch p-2.5 justify-center items-start gap-2.5 inline-flex">
          <div className="flex-col justify-start items-start inline-flex">
            <div className="h-[74px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-gray-800 text-[14px] font-medium leading-tight">
                Name
              </div>
              <div className="self-stretch h-[46px] px-4 py-3 bg-white rounded-md shadow border border border border border-zinc-200 justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-[22px] justify-start items-start gap-2 flex">
                  <div className="grow shrink basis-0 text-gray-400 text-[15px] font-normal leading-snug">
                    Input
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[564px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch text-gray-800 text-[14px] font-medium leading-tight">
              City
            </div>
            <div className="self-stretch h-[46px] px-4 py-3 bg-white rounded-md shadow border border border border border-zinc-200 justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 h-[22px] justify-start items-start gap-2 flex">
                <div className="grow shrink basis-0 text-gray-400 text-[15px] font-normal leading-snug">
                  Input
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch p-2.5 justify-center items-start gap-2.5 inline-flex">
          <div className="flex-col justify-start items-start inline-flex">
            <div className="h-[74px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-gray-800 text-[14px] font-medium leading-tight">
                Name
              </div>
              <div className="self-stretch h-[46px] px-4 py-3 bg-white rounded-md shadow border border border border border-zinc-200 justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-[22px] justify-start items-start gap-2 flex">
                  <div className="grow shrink basis-0 text-gray-400 text-[15px] font-normal leading-snug">
                    Input
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[564px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch text-gray-800 text-[14px] font-medium leading-tight">
              City
            </div>
            <div className="self-stretch h-[46px] px-4 py-3 bg-white rounded-md shadow border border border border border-zinc-200 justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 h-[22px] justify-start items-start gap-2 flex">
                <div className="grow shrink basis-0 text-gray-400 text-[15px] font-normal leading-snug">
                  Input
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch p-2.5 justify-center items-start gap-2.5 inline-flex">
          <div className="flex-col justify-start items-start inline-flex">
            <div className="h-[74px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-gray-800 text-[14px] font-medium leading-tight">
                Name
              </div>
              <div className="self-stretch h-[46px] px-4 py-3 bg-white rounded-md shadow border border border border border-zinc-200 justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-[22px] justify-start items-start gap-2 flex">
                  <div className="grow shrink basis-0 text-gray-400 text-[15px] font-normal leading-snug">
                    Input
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[564px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch text-gray-800 text-[14px] font-medium leading-tight">
              City
            </div>
            <div className="self-stretch h-[46px] px-4 py-3 bg-white rounded-md shadow border border border border border-zinc-200 justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 h-[22px] justify-start items-start gap-2 flex">
                <div className="grow shrink basis-0 text-gray-400 text-[15px] font-normal leading-snug">
                  Input
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch p-2.5 justify-center items-start gap-2.5 inline-flex">
          <div className="flex-col justify-start items-start inline-flex">
            <div className="h-[74px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-gray-800 text-[14px] font-medium leading-tight">
                Name
              </div>
              <div className="self-stretch h-[46px] px-4 py-3 bg-white rounded-md shadow border border border border border-zinc-200 justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-[22px] justify-start items-start gap-2 flex">
                  <div className="grow shrink basis-0 text-gray-400 text-[15px] font-normal leading-snug">
                    Input
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[564px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch text-gray-800 text-[14px] font-medium leading-tight">
              City
            </div>
            <div className="self-stretch h-[46px] px-4 py-3 bg-white rounded-md shadow border border border border border-zinc-200 justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 h-[22px] justify-start items-start gap-2 flex">
                <div className="grow shrink basis-0 text-gray-400 text-[15px] font-normal leading-snug">
                  Input
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch p-2.5 justify-between items-start gap-2.5 inline-flex">
          <div className="w-[140px] h-[50px] p-2.5 bg-blue-500 rounded justify-center items-center gap-2.5 flex">
            <div className="text-white text-[15px] font-semibold leading-snug">
              Back
            </div>
          </div>
          <div className="w-[140px] h-[50px] p-2.5 bg-blue-950 rounded justify-center items-center gap-2.5 flex">
            <div className="text-white text-[15px] font-semibold leading-snug">
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
