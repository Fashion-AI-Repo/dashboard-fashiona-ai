import { Button } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <header
      className={`w-[1344.5px] flex flex-col items-start justify-start pt-0 pb-px pl-5 pr-0 box-border gap-[26.6px] max-w-full text-left text-lg text-dimgray font-inter ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-between gap-5 max-w-full">
        <div className="w-[208.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[13.2px] box-border">
          <Image
            className="w-[87px] h-[27.5px] relative object-cover"
            loading="lazy"
            width={87}
            height={28}
            alt=""
            src="/image-5@2x.png"
          />
        </div>
        <div className="w-[544px] flex flex-col items-start justify-end pt-0 px-0 pb-[13px] box-border max-w-full">
          <div className="self-stretch h-[22px] relative">
            <div className="absolute top-[0px] left-[0px] flex items-center w-full h-full shrink-0">
              <span className="w-full">
                <span className="whitespace-pre-wrap">{`Home           `}</span>
                <span className="font-semibold text-darkorange">Showroom</span>
                <span className="whitespace-pre-wrap">
                  {" "}
                  Pricing Products Blog
                </span>
              </span>
            </div>
            <Image
              className="absolute top-[7.4px] left-[450.2px] w-[11.7px] h-[7.6px] z-[1]"
              loading="lazy"
              width={12}
              height={8}
              alt=""
              src="/polygon-1.svg"
            />
          </div>
        </div>
        <div className="w-[287px] flex flex-row items-start justify-start gap-10 text-black mq450:gap-5 mq1050:hidden">
          <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
            <a className="[text-decoration:none] relative text-[inherit]">
              Login
            </a>
          </div>
          <Button
            className="h-[54px] flex-1"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#ff733b",
              borderRadius: "60px",
              "&:hover": { background: "#ff733b" },
              height: 54,
            }}
          >
            Sign up For Free
          </Button>
        </div>
      </div>
      <div className="self-stretch h-px relative border-black border-t-[1px] border-solid box-border opacity-[0.52]" />
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
