import { IFilterParams } from "@/types"
import { Button, Input, Select } from "antd"
import { FilterOutlined, ReloadOutlined, SearchOutlined } from "@ant-design/icons"
import { Slider } from "antd"
import { FilterWrapper, Label, Option, StyledLayoutFilter } from "./styled"
import { useState, useEffect } from "react"
import { Popover } from "antd"
import ButtonComponent from "@/assets/components/buttonComponent"
import InputComponent from "@/assets/components/inputComponent"
import SelectComponent from "@/assets/components/selectComponent"
import XIcon from "@/assets/icons/xIcon"
type Props = {
    filterParams: IFilterParams
    onSearch: (params: IFilterParams) => void
}
const initialFilterParams: IFilterParams = {
    q: "",
    category: "",
    _sort: undefined,
    title_like: "",
    priceRange: [0.01, 200],
    tier: "",
    theme: "",
    time: "",
    _order: undefined,
}
const Filter = ({ filterParams, onSearch }: Props) => {
    const [filter, setFilter] = useState<IFilterParams>(initialFilterParams)
    const [open, setOpen] = useState(false);

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };
    const updateFilter = (key: keyof IFilterParams, value: any) => {
        setFilter({ ...filter, [key]: value })
    }
    const onReset = () => {
        setFilter(initialFilterParams)
    }
    const funcOnSearch = () => {
        setOpen(false)
        onSearch(filter)
    }
    useEffect(() => {
        setFilter((prev) => {
            return {
                ...prev,
                ...filterParams
            }
        })
    }, [filterParams])

    const UIFilter = <FilterWrapper>
        <InputComponent
            placeholder="Quick search"
            prefix={<SearchOutlined />}
            value={filter.q}
            onChange={e => setFilter({ ...filter, q: e.target.value })}
            style={{ marginBottom: 24 }}
        />

        <Label>PRICE</Label>
        <Slider
            range
            min={0.01}
            max={200}
            step={0.01}
            value={filter.priceRange}
            onChange={val => updateFilter("priceRange", val)}
            tipFormatter={val => `${val} ETH`}
        />
        <div style={{ display: "flex", justifyContent: "space-between", color: "#aaa", fontSize: 12 }}>
            <span>0.01 ETH</span>
            <span>200 ETH</span>
        </div>

        <Label>TIER</Label>
        <SelectComponent
            value={filter.tier}
            onChange={val => updateFilter("tier", val)}
            style={{ width: "100%", marginBottom: 16 }}
        >
            <Option value="all">All</Option>
            <Option value="basic">Basic</Option>
            <Option value="premium">Premium</Option>
            <Option value="deluxe">Deluxe</Option>
        </SelectComponent>

        <Label>THEME</Label>
        <SelectComponent
            value={filter.theme}
            onChange={val => updateFilter("theme", val)}
            style={{ width: "100%", marginBottom: 16 }}
        >
            <Option value="halloween">Halloween</Option>
            <Option value="colorful">Colorful</Option>
            <Option value="light">Light</Option>
            <Option value="dark">Dark</Option>
        </SelectComponent>

        <Label>TIME</Label>
        <SelectComponent
            value={filter.time}
            onChange={val => updateFilter("time", val)}
            style={{ width: "100%", marginBottom: 16 }}
        >
            <Option value="latest">Latest</Option>
            <Option value="oldest">Oldest</Option>
        </SelectComponent>

        <Label>PRICE</Label>
        <SelectComponent
            value={filter._order}
            onChange={val => updateFilter("_order", val)}
            style={{ width: "100%", marginBottom: 24 }}
        >
            <Option value="asc">Low to high</Option>
            <Option value="desc">High to low</Option>
        </SelectComponent>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button    
                type="text"
                icon={<XIcon     />}
                onClick={onReset}
                style={{ padding: 0, color: "#fff" , fontWeight: 600, fontSize: 16}}
            >
                Reset filter
            </Button>
            <ButtonComponent onClick={funcOnSearch} size="large" style={{ width: 150 }}>
                Search
            </ButtonComponent>
        </div>
    </FilterWrapper>
    return (
        <StyledLayoutFilter>
            <div className="layout-filter__btn">

                <Popover
                    content={UIFilter}
                    title="Title"
                    trigger="click"
                    open={open}
                    onOpenChange={handleOpenChange}
                    placement="bottomRight"
                    color="#060606f5"
                >
                    <ButtonComponent icon={<FilterOutlined />} />
                </Popover>
            </div>
            <div className="layout-filter__full">
                {UIFilter}
            </div>
        </StyledLayoutFilter>
    )

}

export default Filter;