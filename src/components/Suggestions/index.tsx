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
            return <div>{suggestion.username}</div>
        })}
      </div>
    );
  }