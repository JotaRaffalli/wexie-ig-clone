import { ISuggestions } from "../../services/api.service";

export type SuggestionProps = {
    data: ISuggestions[];
}

export default function Suggestions(suggestions: SuggestionProps) {

    return (
      <div>
        <div className="my-4">
            Suggestions <br/>
        </div>
        {suggestions.data.map((suggestion) => {
            return (
              <div className="grid grid-cols-4 py-2">
                <div className="grid place-items-center">
                  <img src={suggestion.profilePicture} alt="" className="rounded-full" />
                </div>
                <div className="grid col-span-3 mx-2 items-center">
                  <div className="text-xs ">{suggestion.username}</div>
                </div>
              </div>
            
            )})}
      </div>
    );
  }